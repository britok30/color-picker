import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { RgbColorPicker, RgbColor } from "react-colorful";
import { Footer } from "../components/Footer";
import { colord, extend, random } from "colord";
import hwbPlugin from "colord/plugins/hwb";
import cmykPlugin from "colord/plugins/cmyk";
import a11yPlugin from "colord/plugins/a11y";
import lchPlugin from "colord/plugins/lch";
import labPlugin from "colord/plugins/lab";
import namesPlugin from "colord/plugins/names";
import harmonies, { HarmonyType } from "colord/plugins/harmonies";
import { Detail } from "../components/Details";
import { Harmonies } from "../components/Harmonies";

const Home: NextPage = () => {
  extend([
    hwbPlugin,
    cmykPlugin,
    a11yPlugin,
    lchPlugin,
    labPlugin,
    namesPlugin,
    harmonies,
  ]);

  const [color, setColor] = useState<RgbColor>({ r: 0, g: 0, b: 0 });
  const hex = colord(color).toHex();
  const textColor = colord(hex).brightness() >= 0.5 ? "#000" : "#fff";
  const hsl = colord(hex).toHslString();
  const hwb = colord(hex).toHwbString();
  const cmyk = colord(hex).toCmykString();
  const name = colord(hex).toName({ closest: true });
  const brightness = colord(hex).brightness() * 100;
  const luminance = colord(hex).luminance();
  const contrast = colord(hex).contrast();
  const hue = colord(hex).hue();
  const lch = colord(hex).toLchString();
  const lab = colord(hex).toLab();

  const getHarmonyList = (key: HarmonyType) => {
    return colord(hex)
      .harmonies(key)
      .map((c) => c.toHex());
  };

  const complementary = getHarmonyList("complementary");
  const analogous = getHarmonyList("analogous");
  const dsComplemenary = getHarmonyList("double-split-complementary");
  const rectangle = getHarmonyList("rectangle");
  const splitComplementary = getHarmonyList("split-complementary");
  const tetradic = getHarmonyList("tetradic");
  const triadic = getHarmonyList("triadic");

  const pageTitle = `Color Picker | HTML Color Codes | RGB Color Picker | Color Conversions`;
  const description = `Color Picker: Get useful color conversions about color ${hex}.`;

  const handleChange = (color: RgbColor) => {
    setColor(color);
  };

  useEffect(() => {
    // Generate randoem color
    setColor(random().toRgb());
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center py-4"
      style={{
        color: textColor,
        backgroundColor: hex,
      }}
    >
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta content="Kelvin Brito" name="author" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content={hex} />
        <meta
          name="keywords"
          content="color picker, hex color picker, rgb color picker, color conversions, hex, colour"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <main className="flex flex-col space-y-5 items-center justify-center">
        <RgbColorPicker color={color} onChange={handleChange} />
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
            <Detail title="Brightness" value={brightness} />
            <Detail title="Luminance" value={luminance} />
            <Detail title="Contrast on white" value={`${contrast}:1`} />
            <Detail title="Hue" value={`${hue} deg`} />
            {name && <Detail title="CSS Keyword" value={`~${name}`} />}
          </div>
          {/* <div className="mt-5">
            <h2 className="text-3xl mb-4">Color Harmonies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1">
              <Harmonies list={complementary} title="Complementary" />
              <Harmonies list={analogous} title="Analogous" />

              <Harmonies list={rectangle} title="Rectangle" />
              <Harmonies
                list={splitComplementary}
                title="Split Complementary"
              />
              <Harmonies list={tetradic} title="Tetradic" />
              <Harmonies list={triadic} title="Triadic" />
            </div>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
