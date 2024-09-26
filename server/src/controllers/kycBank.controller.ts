import { Request, Response } from "express";
import prisma from "../lib/prisma";

export async function getKycBanks(req: Request, res: Response): Promise<void> {
  try {
    const kycBanks = await prisma.kycBank.findMany();

    res.status(200).json(kycBanks);
  } catch (error: any) {
    res.status(500).json({
      message: `Error fetching KYC Banks: ${error.message}`,
      error,
    });
  }
}

export async function createKycBank(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newKycBank = await prisma.kycBank.create({
      data: req.body,
    });

    res.status(201).json(newKycBank);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating KYC Bank: ${error.message}`,
      error,
    });
  }
}
