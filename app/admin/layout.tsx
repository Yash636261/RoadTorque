import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }
  return <>{children}</>;
};

export default layout;
