import React, { ReactNode } from "react";

export const H1: React.FC<{ children: ReactNode }> = ({ children }) => <h1 className="text-4xl">{children}</h1>;

export const H2: React.FC<{ children: ReactNode }> = ({ children }) => <h2 className="mt-10">{children}</h2>;

export const H3: React.FC<{ children: ReactNode }> = ({ children }) => <h3 className="mt-8">{children}</h3>;

export const P: React.FC<{ children: ReactNode }> = ({ children }) => <p>{children}</p>;

export const Ul: React.FC<{ children: ReactNode }> = ({ children }) => <ul className="pl-4">{children}</ul>;

export const Li: React.FC<{ children: ReactNode }> = ({ children }) => (
  <li className="list-disc list-outside">{children}</li>
);
