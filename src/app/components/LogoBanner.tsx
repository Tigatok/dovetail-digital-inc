"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function LogoBanner({
  title,
  logo,
}: {
  title: String;
  logo: any;
}) {
  return (
    <div className="py-16">
      <Typography className="sm:hidden" variant="h2" textAlign="center">
        {title}
      </Typography>
      <Typography textAlign="center" variant="h2" className="hidden sm:block">
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        mt={4}
        useFlexGap
        flexWrap={"wrap"}
        justifyContent="center"
      >
        {logo.map(
          (logo: {
            title: string;
            alt: string;
            image: {
              data: [
                { attributes: { url: string; width: number; height: number } }
              ];
            };
          }) => {
            return (
              <Image
                key={logo.title}
                src={logo.image.data[0].attributes.url}
                alt={logo.alt}
                width={logo.image.data[0].attributes.width}
                height={logo.image.data[0].attributes.height}
                style={{ height: "auto", maxWidth: 100 }}
              />
            );
          }
        )}
      </Stack>
    </div>
  );
}
