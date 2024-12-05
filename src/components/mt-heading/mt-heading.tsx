import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'mt-heading',
  styleUrl: 'mt-heading.scss',
  shadow: true,
})
export class MtHeading {
  /**
   *
   */
  @Prop({ reflect: true }) type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

  /**
   *
   */
  @Prop({ reflect: true }) color: string;

  getTypeElement() {
    switch (this.type) {
      case 'h1':
        return (
          <h1>
            <slot></slot>
          </h1>
        );

      case 'h2':
        return (
          <h2>
            <slot></slot>
          </h2>
        );

      case 'h3':
        return (
          <h3>
            <slot></slot>
          </h3>
        );

      case 'h4':
        return (
          <h4>
            <slot></slot>
          </h4>
        );

      case 'h5':
        return (
          <h5>
            <slot></slot>
          </h5>
        );

      case 'h6':
        return (
          <h6>
            <slot></slot>
          </h6>
        );

      default:
        return (
          <h1>
            <slot></slot>
          </h1>
        );
    }
  }

  render() {
    return <Host style={{ '--color': this.color ?? 'inherit' }}>{this.getTypeElement()}</Host>;
  }
}
