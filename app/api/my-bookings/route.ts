import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    console.log("MY BOOKINGS USER ID:", userId);

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "User ID is required",
        },
        { status: 400 }
      );
    }

    const bookings = await prisma.booking.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log("MY BOOKINGS RESULT:", bookings);

    return NextResponse.json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("================================");
    console.error("MY BOOKINGS API ERROR:");
    console.error(error);
    console.error("================================");

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
        error:
          process.env.NODE_ENV === "development"
            ? String(error)
            : undefined,
      },
      { status: 500 }
    );
  }
}