import Section from "@/components/template/section";
import { SectionProps } from "@/components/template/section/props";
import Box from "@mui/material/Box";

const ThirdSection = ({ onViewChange }: SectionProps) => {
  return (
    <Section onViewChange={onViewChange}>
      <Box sx={{ height: "1000px", backgroundColor: 'violet' }}>
        <span>ThirdSection</span>
      </Box>
    </Section>
  );
};

export default ThirdSection;