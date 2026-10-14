import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

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
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    const totalBookings = bookings.length;

    const pendingBookings = bookings.filter(
      (b) => b.status === "Pending"
    ).length;

    const confirmedBookings = bookings.filter(
      (b) => b.status === "Confirmed"
    ).length;

    const cancelledBookings = bookings.filter(
      (b) => b.status === "Cancelled"
    ).length;

    return NextResponse.json({
      success: true,
      stats: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        cancelledBookings,
      },
      recentBookings: bookings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}