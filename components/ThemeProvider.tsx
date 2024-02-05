"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </QueryParamProvider>
  );
}
