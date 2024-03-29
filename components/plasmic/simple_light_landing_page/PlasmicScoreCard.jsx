// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tKTnPCKDkyqVsBLoY29HS4
// Component: bhIPBS0rHs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: tKTnPCKDkyqVsBLoY29HS4/projectcss
import sty from "./PlasmicScoreCard.module.css"; // plasmic-import: bhIPBS0rHs/css

export const PlasmicScoreCard__VariantProps = new Array();

export const PlasmicScoreCard__ArgProps = new Array(
  "time",
  "status",
  "team1",
  "score1",
  "score2",
  "team2",
  "stage"
);

function PlasmicScoreCard__RenderFunc(props) {
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
      <div className={classNames(projectcss.all, sty.freeBox__pWhah)}>
        <div className={classNames(projectcss.all, sty.freeBox__ilM9W)}>
          {p.renderPlasmicSlot({
            defaultContents: "18 Apr 22",
            value: args.time,
            className: classNames(sty.slotTargetTime)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__ndiFq)}>
          {p.renderPlasmicSlot({
            defaultContents: "Full-time",
            value: args.status,
            className: classNames(sty.slotTargetStatus)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__iFhPi)}>
        <div className={classNames(projectcss.all, sty.freeBox___5TwZu)}>
          <div className={classNames(projectcss.all, sty.freeBox___7DV)}>
            {p.renderPlasmicSlot({
              defaultContents: "Chelsea",
              value: args.team1,
              className: classNames(sty.slotTargetTeam1)
            })}
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__sbF5Q)}>
          {p.renderPlasmicSlot({
            defaultContents: "1",
            value: args.score1,
            className: classNames(sty.slotTargetScore1)
          })}
        </div>

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <React.Fragment>
            <React.Fragment>{""}</React.Fragment>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"-"}
                    </span>
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </h2>
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </h1>
            <React.Fragment>{""}</React.Fragment>
          </React.Fragment>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___41VGo)}>
          {p.renderPlasmicSlot({
            defaultContents: "0",
            value: args.score2,
            className: classNames(sty.slotTargetScore2)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__oenMi)}>
          <div className={classNames(projectcss.all, sty.freeBox__rn24K)}>
            {p.renderPlasmicSlot({
              defaultContents: "Man City",
              value: args.team2,
              className: classNames(sty.slotTargetTeam2)
            })}
          </div>
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__e24Cf)}>
        <div className={classNames(projectcss.all, sty.freeBox__o4BZ3)}>
          {p.renderPlasmicSlot({
            defaultContents: "Final",
            value: args.stage
          })}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "h1", "h2"],
  text: ["text", "h1", "h2"],
  h1: ["h1", "h2"],
  h2: ["h2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicScoreCard__ArgProps,
      internalVariantPropNames: PlasmicScoreCard__VariantProps
    });

    return PlasmicScoreCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScoreCard";
  } else {
    func.displayName = `PlasmicScoreCard.${nodeName}`;
  }
  return func;
}

export const PlasmicScoreCard = Object.assign(
  // Top-level PlasmicScoreCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),
    h2: makeNodeComponent("h2"),
    // Metadata about props expected for PlasmicScoreCard
    internalVariantProps: PlasmicScoreCard__VariantProps,
    internalArgProps: PlasmicScoreCard__ArgProps
  }
);

export default PlasmicScoreCard;
/* prettier-ignore-end */
