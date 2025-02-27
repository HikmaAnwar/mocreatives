"use client";
import { Grid, Text, List } from "@mantine/core";
import { BrandLinkedin, BrandTwitter, BrandFacebook, BrandInstagram } from "tabler-icons-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-tech-grey border-t border-neuro-blue/20 w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Grid gutter="xl">
          {/* Services Columns */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Grid gutter="md">
              {/* Marketing Services */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text className="text-creative-yellow font-lato font-bold mb-4 text-base uppercase tracking-wide">
                  Marketing
                </Text>
                <List spacing={4} className="font-open-sans text-sm">
                  {[
                    "Brand Strategy",
                    "Advertising Campaigns",
                    "Social Media",
                    "Content Creation",
                    "PR & Comms"
                  ].map((item, index) => (
                    <List.Item key={index} className="text-gray-300 hover:text-cultural-red transition-colors mb-1">
                      {item}
                    </List.Item>
                  ))}
                </List>
              </Grid.Col>

              {/* Training Services */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text className="text-creative-yellow font-lato font-bold mb-4 text-base uppercase tracking-wide">
                  Training
                </Text>
                <List spacing={4} className="font-open-sans text-sm">
                  {[
                    "Corporate Training",
                    "Brand Consulting",
                    "CX Training",
                    "Digital Workshops",
                    "Market Research"
                  ].map((item, index) => (
                    <List.Item key={index} className="text-gray-300 hover:text-cultural-red transition-colors mb-1">
                      {item}
                    </List.Item>
                  ))}
                </List>
              </Grid.Col>

              {/* Digital Solutions */}
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Text className="text-creative-yellow font-lato font-bold mb-4 text-base uppercase tracking-wide">
                  Digital
                </Text>
                <List spacing={4} className="font-open-sans text-sm">
                  {[
                    "Web Development",
                    "SEO & Ads",
                    "E-Commerce",
                    "Data Analytics",
                    "Cloud Solutions"
                  ].map((item, index) => (
                    <List.Item key={index} className="text-gray-300 hover:text-cultural-red transition-colors mb-1">
                      {item}
                    </List.Item>
                  ))}
                </List>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          {/* Compact Image */}
          <Grid.Col span={{ base: 12, lg: 4 }} className="mt-8 lg:mt-0">
            <div className="relative h-64 w-full rounded-lg overflow-hidden border border-cultural-red/20">
              <Image
                src="/assets/professional.jpg"
                alt="Teamwork"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </Grid.Col>
        </Grid>

        {/* Compact Branding */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <Text className="text-xl font-lato font-bold text-white">
            MO<span className="text-creative-yellow">CREATIVES</span>
          </Text>
          <div className="flex gap-4">
            {[BrandLinkedin, BrandTwitter, BrandFacebook, BrandInstagram].map((Icon, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full bg-neuro-blue/20 flex items-center justify-center
                         hover:bg-creative-yellow transition-all duration-300"
              >
                <Icon size={16} className="text-creative-yellow" />
              </button>
            ))}
          </div>
        </div>

        {/* Compact Copyright */}
        <div className="mt-6 border-t border-neuro-blue/20 pt-4">
          <Text className="text-center text-xs text-gray-300 font-open-sans">
            © 2024 Mo Creatives | Privacy | Terms
          </Text>
        </div>
      </div>
    </footer>
  );
}