import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { hash } from "bcryptjs";
import { auth } from "@/auth";

// Register cho tài khoản manager (Chỉ Admin mới có quyền này)
export async function POST(req) {
  try {
    //Kiểm tra quyền truy cập
    const session = await auth();

    // Nếu không có session hoặc không phải admin thì trả về lỗi
    if (!session || session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "Bạn không có quyền thực hiện hành động này" },
        { status: 403 }
      );
    }

    // Kết nối Database
    await connectDB();

    // Kiểm tra số lượng manager đã tạo
    const managerCount = await User.countDocuments({ role: "manager" });
    if (managerCount >= 5) {
      return NextResponse.json(
        { message: "Đã đạt giới hạn 5 tài khoản manager" },
        { status: 400 }
      );
    }

    // Lấy dữ liệu từ request
    const { email, password, fullName } = await req.json();

    // Kiểm tra người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Mã hóa mật khẩu
    const hashedPassword = await hash(password, 10);

    // Tạo người dùng mới
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
      role: "manager", // nếu bạn muốn lưu role
      image: {
        url: process.env.NEXT_PRAVITE_IMAGE,
        title: "Avata Default",
      },
      background: {
        url: process.env.NEXT_PRAVITE_BACKGROUND,
        title: "Background Default",
      },
    });

    // Trả thông tin người dùng về client
    return NextResponse.json(
      {
        id: newUser._id.toString(),
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Đăng ký thất bại:", error);
    return NextResponse.json({ message: "Đăng ký thất bại" }, { status: 500 });
  }
}

// Lấy thông tin toàn bộ tài khoản (Chỉ Admin mới có quyền này)
export async function GET(req) {
  try {
    // Kiểm tra quyền truy cập
    const session = await auth();

    // Nếu không có session hoặc không phải admin thì trả về lỗi
    if (
      !session ||
      (session.user.role !== "admin" && session.user.role !== "manager")
    ) {
      return NextResponse.json(
        { message: "Bạn không có quyền thực hiện hành động này" },
        { status: 403 }
      );
    }

    // Kết nối Database
    await connectDB();

    // Lấy toàn bộ tài khoản (không bao gồm mật khẩu)
    const users = await User.find({}, "-password");

    // Trả danh sách người dùng về client
    return NextResponse.json(
      { data: users, message: "Lấy danh sách người dùng thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lấy danh sách người dùng thất bại:", error);
    return NextResponse.json(
      { message: "Lấy danh sách người dùng thất bại" },
      { status: 500 }
    );
  }
}
