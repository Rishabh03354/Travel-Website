import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      destination,
      price,
      date,
      userId,
      name,
      email,
      phone,
      travelers,
    } = body;

    if (
      !destination ||
      !price ||
      !date ||
      !userId ||
      !name ||
      !email ||
      !phone ||
      !travelers
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        destination,
        price: Number(price),
        date,
        name,
        email,
        phone,
        travelers: Number(travelers),
        userId,
        status: "Pending",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking Successful",
        booking,
      },
      { status: 201 }
    );
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

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      bookings,
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