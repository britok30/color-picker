import { useState, useEffect } from "react";
import { RgbColorPicker, RgbColor } from "react-colorful";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { colord, extend, random } from "colord";
import hwbPlugin from "colord/plugins/hwb";
import cmykPlugin from "colord/plugins/cmyk";
import a11yPlugin from "colord/plugins/a11y";
import lchPlugin from "colord/plugins/lch";
import labPlugin from "colord/plugins/lab";
import namesPlugin from "colord/plugins/names";
import { Detail } from "../components/Details";

const Home = ({ randomColor }: { randomColor: RgbColor }) => {
  extend([
    hwbPlugin,
    cmykPlugin,
    a11yPlugin,
    lchPlugin,
    labPlugin,
    namesPlugin,
  ]);

  const [color, setColor] = useState<RgbColor>(randomColor);
  const hex = colord(color).toHex();
  const textColor = !colord(hex).isReadable() ? "#000" : "#fff";
  const hsl = colord(hex).toHslString();
  const hwb = colord(hex).toHwbString();
  const cmyk = colord(hex).toCmykString();
  const name = colord(hex).toName({ closest: true });
  const brightness = colord(hex).brightness() * 100;
  const luminance = colord(hex).luminance() * 100;
  const contrast = colord(hex).contrast();
  const hue = colord(hex).hue();
  const lch = colord(hex).toLchString();
  const lab = colord(hex).toLab();

  const pageTitle = `Color Picker | HTML Color Codes | RGB Color Picker | Color Conversions`;
  const description = `Color Picker: Get useful color conversions about color ${hex}.`;

  const handleChange = (color: RgbColor) => {
    setColor(color);
  };

  useEffect(() => {
    // Set random color
    setColor(randomColor);
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center py-4"
      style={{
        color: textColor,
        backgroundColor: hex,
      }}
    >
      <SEO pageTitle={pageTitle} description={description} hex={hex} />

      <main className="flex flex-col space-y-5 items-center justify-center">
        <RgbColorPicker
          aria-label="rgb-color-picker"
          color={color}
          onChange={handleChange}
        />
        <div>
          <h1 className="text-6xl mb-4">Color Picker 🎨 </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1">
            <Detail
              title="RGB"
              value={`rgb(${color.r} ${color.g} ${color.b})`}
            />
            <Detail title="HEX" value={hex} />
            <Detail title="HSL" value={hsl} />
            <Detail title="HWB" value={hwb} />
            <Detail title="CMYK" value={cmyk} />
            <Detail title="LCH" value={lch} />
            <Detail
              title="LAB"
              value={`lab(${lab.l.toFixed(0)}, ${lab.a.toFixed(
                0
              )}, ${lab.b.toFixed(0)}, ${lab.alpha})`}
            />
            <Detail title="Brightness" value={`${brightness.toFixed(0)}%`} />
            <Detail title="Luminance" value={`${luminance.toFixed(0)}%`} />
            <Detail title="Contrast on white" value={`${contrast}:1`} />
            <Detail title="Hue" value={`${hue} deg`} />
            {name && <Detail title="CSS Keyword" value={`~${name}`} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const randomColor = random().toRgb();
  return {
    props: {
      randomColor,
    },
  };
}

export default Home;
