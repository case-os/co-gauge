/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CoGauge {
        /**
          * The color (HEX, RGB, ....)
         */
        "color": string;
        /**
          * If the component should adapt it's width automatically
         */
        "responsive": boolean;
        /**
          * The value of the gauge between 0 and 100
         */
        "value": number;
    }
}
declare global {
    interface HTMLCoGaugeElement extends Components.CoGauge, HTMLStencilElement {
    }
    var HTMLCoGaugeElement: {
        prototype: HTMLCoGaugeElement;
        new (): HTMLCoGaugeElement;
    };
    interface HTMLElementTagNameMap {
        "co-gauge": HTMLCoGaugeElement;
    }
}
declare namespace LocalJSX {
    interface CoGauge {
        /**
          * The color (HEX, RGB, ....)
         */
        "color"?: string;
        /**
          * If the component should adapt it's width automatically
         */
        "responsive"?: boolean;
        /**
          * The value of the gauge between 0 and 100
         */
        "value"?: number;
    }
    interface IntrinsicElements {
        "co-gauge": CoGauge;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "co-gauge": LocalJSX.CoGauge & JSXBase.HTMLAttributes<HTMLCoGaugeElement>;
        }
    }
}
