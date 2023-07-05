import Section from "@/components/template/section";
import { SectionProps } from "@/components/template/section/props";
import Box from "@mui/material/Box";

const FirstSection = ({ onViewChange }: SectionProps) => {
  return (
    <Section onViewChange={onViewChange}>
      <Box sx={{ height: "1000px", backgroundColor: 'yellow' }}>
        <span>FirstSection</span>
      </Box>
    </Section>
  );
};

export default FirstSection;