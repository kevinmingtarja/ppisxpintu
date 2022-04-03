// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tKTnPCKDkyqVsBLoY29HS4
// Component: jj6PS5r6usRXA
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tKTnPCKDkyqVsBLoY29HS4/projectcss
import sty from "./PlasmicIconLink.module.css"; // plasmic-import: jj6PS5r6usRXA/css

export const PlasmicIconLink__VariantProps = new Array();

export const PlasmicIconLink__ArgProps = new Array("icon", "link");

function PlasmicIconLink__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
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
        href={args.link}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(projectcss.all, sty.svg__aec5D)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotTargetIcon)
        })}
      </p.PlasmicLink>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconLink__ArgProps,
      internalVariantPropNames: PlasmicIconLink__VariantProps
    });

    return PlasmicIconLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconLink";
  } else {
    func.displayName = `PlasmicIconLink.${nodeName}`;
  }
  return func;
}

export const PlasmicIconLink = Object.assign(
  // Top-level PlasmicIconLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicIconLink
    internalVariantProps: PlasmicIconLink__VariantProps,
    internalArgProps: PlasmicIconLink__ArgProps
  }
);

export default PlasmicIconLink;
/* prettier-ignore-end */
