import { CmsWidgetControlProps } from 'netlify-cms-core';
import React from 'react';
import { v4 } from 'uuid';

export class UuidControl extends React.Component<CmsWidgetControlProps<any>> {
  state = {
    value: this.props.value,
  };

  componentDidMount() {
    if (!this.state.value) {
      const newValue = v4();

      this.setState(
        () => ({
          value: newValue,
        }),
        () => {
          this.props.onChange(newValue);
        },
      );
    }
  }
  render() {
    const { forID, onChange, classNameWrapper } = this.props;
    const { value } = this.state;
    return (
      <>
        <input
          type="hidden"
          id={forID}
          className={classNameWrapper}
          value={value}
          onChange={(e) => onChange(e.target.value.trim())}
        />
        <div>{value}</div>
      </>
    );
  }
}

export function UuidPreview({ value }: { value: string }) {
  return <div>{value}</div>;
}
