// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tKTnPCKDkyqVsBLoY29HS4
// Component: gyrzR9gsfX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: ey_uE02a4G6XM/component
import Section from "../../Section"; // plasmic-import: O5PofbKZuSyR-q/component
import Faq from "../../Faq"; // plasmic-import: BtVnlZOk39LgvY/component
import Footer from "../../Footer"; // plasmic-import: ZPn3bgNH6g0zH/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "../simple_light_landing_page/plasmic_simple_light_landing_page.module.css"; // plasmic-import: tKTnPCKDkyqVsBLoY29HS4/projectcss
import sty from "./PlasmicFaq2.module.css"; // plasmic-import: gyrzR9gsfX/css

export const PlasmicFaq2__VariantProps = new Array();

export const PlasmicFaq2__ArgProps = new Array();

function PlasmicFaq2__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            className={classNames("__wab_instance", sty.faqSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"FAQ"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <Faq
                className={classNames("__wab_instance", sty.faq__hrR1P)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Is this event fun?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__qIlZt)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Can I add or remove licenses?"}
                </div>
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq___9Xjtc)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__pd2Nb)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Is koko Hans single?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__krpDg)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__k3GoQ)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>
            </p.Stack>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "faqSection", "freeBox", "text", "footer"],
  header: ["header"],
  faqSection: ["faqSection", "freeBox", "text"],
  freeBox: ["freeBox", "text"],
  text: ["text"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFaq2__ArgProps,
      internalVariantPropNames: PlasmicFaq2__VariantProps
    });

    return PlasmicFaq2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaq2";
  } else {
    func.displayName = `PlasmicFaq2.${nodeName}`;
  }
  return func;
}

export const PlasmicFaq2 = Object.assign(
  // Top-level PlasmicFaq2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    faqSection: makeNodeComponent("faqSection"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFaq2
    internalVariantProps: PlasmicFaq2__VariantProps,
    internalArgProps: PlasmicFaq2__ArgProps
  }
);

export default PlasmicFaq2;
/* prettier-ignore-end */