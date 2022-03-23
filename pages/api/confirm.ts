// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  const guestName = req.query.name;
  const body = JSON.parse(req.body);
  const confirm = body.confirm;

  const guest = await prisma.guest.update({
    where: { name: guestName as string },
    data: { accepted: confirm },
  });
  res.json(guest);
}
