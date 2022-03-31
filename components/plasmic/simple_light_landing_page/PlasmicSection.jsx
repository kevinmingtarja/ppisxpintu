// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tKTnPCKDkyqVsBLoY29HS4
// Component: O5PofbKZuSyR-q
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tKTnPCKDkyqVsBLoY29HS4/projectcss
import sty from "./PlasmicSection.module.css"; // plasmic-import: O5PofbKZuSyR-q/css

export const PlasmicSection__VariantProps = new Array(
  "color",
  "hasTitle",
  "hasSubtitle"
);

export const PlasmicSection__ArgProps = new Array(
  "children",
  "subtitle",
  "title"
);

function PlasmicSection__RenderFunc(props) {
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
        sty.root,
        {
          [sty.rootcolor_dark]: hasVariant(variants, "color", "dark"),
          [sty.rootcolor_halfDark]: hasVariant(variants, "color", "halfDark"),
          [sty.roothasSubtitle]: hasVariant(
            variants,
            "hasSubtitle",
            "hasSubtitle"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        hasGap={true}
        className={classNames(projectcss.all, sty.content, {
          [sty.contentcolor_halfDark]: hasVariant(
            variants,
            "color",
            "halfDark"
          ),

          [sty.contenthasSubtitle]: hasVariant(
            variants,
            "hasSubtitle",
            "hasSubtitle"
          ),

          [sty.contenthasTitle]: hasVariant(variants, "hasTitle", "hasTitle")
        })}
      >
        {(hasVariant(variants, "hasTitle", "hasTitle") ? true : true) ? (
          <div
            data-plasmic-name={"titleContainer"}
            data-plasmic-override={overrides.titleContainer}
            className={classNames(projectcss.all, sty.titleContainer, {
              [sty.titleContainerhasTitle]: hasVariant(
                variants,
                "hasTitle",
                "hasTitle"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Title",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </div>
        ) : null}
        {(hasVariant(variants, "hasSubtitle", "hasSubtitle") ? true : true) ? (
          <div
            data-plasmic-name={"subtitleContainer"}
            data-plasmic-override={overrides.subtitleContainer}
            className={classNames(projectcss.all, sty.subtitleContainer, {
              [sty.subtitleContainerhasSubtitle]: hasVariant(
                variants,
                "hasSubtitle",
                "hasSubtitle"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Subtitle",
              value: args.subtitle,
              className: classNames(sty.slotTargetSubtitle)
            })}
          </div>
        ) : null}

        <div
          data-plasmic-name={"contentContainer"}
          data-plasmic-override={overrides.contentContainer}
          className={classNames(projectcss.all, sty.contentContainer, {
            [sty.contentContainerhasSubtitle]: hasVariant(
              variants,
              "hasSubtitle",
              "hasSubtitle"
            ),

            [sty.contentContainerhasTitle]: hasVariant(
              variants,
              "hasTitle",
              "hasTitle"
            ),

            [sty.contentContainerhasTitle_hasSubtitle]:
              hasVariant(variants, "hasTitle", "hasTitle") &&
              hasVariant(variants, "hasSubtitle", "hasSubtitle")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "content",
    "titleContainer",
    "subtitleContainer",
    "contentContainer"
  ],

  content: [
    "content",
    "titleContainer",
    "subtitleContainer",
    "contentContainer"
  ],

  titleContainer: ["titleContainer"],
  subtitleContainer: ["subtitleContainer"],
  contentContainer: ["contentContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSection__ArgProps,
      internalVariantPropNames: PlasmicSection__VariantProps
    });

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent("content"),
    titleContainer: makeNodeComponent("titleContainer"),
    subtitleContainer: makeNodeComponent("subtitleContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
