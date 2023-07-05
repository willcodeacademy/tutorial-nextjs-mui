import Section from "@/components/template/section";
import { SectionProps } from "@/components/template/section/props";
import Box from "@mui/material/Box";

const SecondSection = ({ onViewChange }: SectionProps) => {
  return (
    <Section onViewChange={onViewChange}>
      <Box sx={{ height: "1000px", backgroundColor: 'green' }}>
        <span>SecondSection</span>
      </Box>
    </Section>
  );
};

export default SecondSection;