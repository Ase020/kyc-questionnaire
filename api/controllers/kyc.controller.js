import prisma from "../lib/prisma.js";

export const getKYC = async (req, res) => {
  try {
    const allKycs = await prisma.kyc.findMany();
    res.status(200).json(allKycs);
  } catch (error) {
    res.status(500).json({ message: "Failed to get KYCs", error });
  }
};

export const createKYC = async (req, res) => {
  const body = req.body;

  try {
    const newKyc = await prisma.kyc.create({
      data: body,
    });

    res.status(200).json({ message: "KYC created successfully...", newKyc });
  } catch (error) {
    res.status(500).json({ message: "Failed to create KYC", error });
  }
};
