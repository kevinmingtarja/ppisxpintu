// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tKTnPCKDkyqVsBLoY29HS4
// Component: ey_uE02a4G6XM
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: iFqFPiL8JIFWnK/component
import { useScreenVariants as useScreenVariantsd78FvYflotizkk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d78fvYflotizkk/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tKTnPCKDkyqVsBLoY29HS4/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: ey_uE02a4G6XM/css
import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: Wv0VnUzBEWKfnt/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: 6MLW-XtXOmG0d4/icon

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsd78FvYflotizkk()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        <LogoIcon
          className={classNames(projectcss.all, sty.svg__tkY1Y)}
          role={"img"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__h2EMe)}
          color={"clear"}
          link={"/features"}
          size={"compact"}
        >
          {"Features"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__xDwD0)}
          color={"clear"}
          link={"/pricing"}
          size={"compact"}
        >
          {"Pricing"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__jArR)}
          color={"clear"}
          size={"compact"}
        >
          {"Sign in"}
        </Button>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            className={classNames("__wab_instance", sty.button__bIz82)}
            endIcon={
              <RightArrowIcon
                className={classNames(projectcss.all, sty.svg__pXYX)}
                role={"img"}
              />
            }
            showEndIcon={true}
          >
            {"Sign up"}
          </Button>
        ) : null}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "freeBox"],
  link: ["link"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
