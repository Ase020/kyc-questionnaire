import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getNatureOfCustomers(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const natureOfCustomers = await prisma.natureOfCustomer.findMany();

    res.status(200).json(natureOfCustomers);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching nature of customers: ${error.message}`,
      error,
    });
  }
}

export async function createNatureOfCustomer(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newNatureOfCustomer = await prisma.natureOfCustomer.create({
      data: req.body,
    });

    res.status(201).json(newNatureOfCustomer);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating nature of customer: ${error.message}`,
      error,
    });
  }
}
