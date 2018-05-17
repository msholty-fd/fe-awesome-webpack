import React from 'react';

export default class CreateBet extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <div className="pt-form-group">
          <label className="pt-label">
            Label A
            <span className="pt-text-muted">(required)</span>
          </label>
          <div className="pt-form-content">
            <input
              id="example-form-group-input-a"
              className="pt-input"
              style={{ width: 300 }}
              placeholder="Placeholder text"
              type="text"
              dir="auto"
            />
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
        <div className="pt-form-group pt-intent-danger">
          <label className="pt-label">
            Label B
            <span className="pt-text-muted">(required)</span>
          </label>
          <div className="pt-form-content">
            <div className="pt-input-group pt-intent-danger">
              <span className="pt-icon pt-icon-calendar" />
              <input
                id="example-form-group-input-b"
                className="pt-input"
                style={{ width: 200 }}
                type="text"
                placeholder="Placeholder text"
                dir="auto"
              />
            </div>
            <div className="pt-form-helper-text">Please enter a value</div>
          </div>
        </div>
        <div className="pt-form-group">
          <label className="pt-label">
            Label C
            <span className="pt-text-muted">(required)</span>
          </label>
          <div className="pt-form-content">
            <label className="pt-control pt-switch">
              <input id="example-form-group-switch-c" type="checkbox" />
              <span className="pt-control-indicator" />
              Switch C
            </label>
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
        <div className="pt-form-group pt-inline">
          <label className="pt-label">
            Label D
            <span className="pt-text-muted">(optional)</span>
          </label>
          <div className="pt-form-content">
            <div className="pt-input-group">
              <span className="pt-icon pt-icon-calendar" />
              <input
                id="example-form-group-input-d"
                className="pt-input"
                style={{ width: 200 }}
                type="text"
                placeholder="Placeholder text"
                dir="auto"
              />
            </div>
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
        <div className="pt-form-group pt-inline pt-large pt-disabled">
          <label className="pt-label">
            Label E
            <span className="pt-text-muted">(optional)</span>
          </label>
          <div className="pt-form-content">
            <div className="pt-input-group pt-large pt-disabled">
              <span className="pt-icon pt-icon-calendar" />
              <input
                id="example-form-group-input-e"
                className="pt-input"
                disabled={true}
                style={{ width: 200 }}
                type="text"
                placeholder="Placeholder text"
                dir="auto"
              />
            </div>
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
        <div className="pt-form-group pt-inline">
          <label className="pt-label">Label F</label>
          <div className="pt-form-content">
            <label className="pt-control pt-switch">
              <input id="example-form-group-switch-f" type="checkbox" />
              <span className="pt-control-indicator" />
              Switch F
            </label>
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
        <div className="pt-form-group pt-inline pt-large pt-disabled">
          <label className="pt-label">Label G</label>
          <div className="pt-form-content">
            <label className="pt-control pt-switch pt-large pt-disabled">
              <input
                id="example-form-group-switch-g"
                type="checkbox"
                disabled={true}
              />
              <span className="pt-control-indicator" />
              Switch G
            </label>
            <div className="pt-form-helper-text">
              Helper text with details / user feedback
            </div>
          </div>
        </div>
      </div>
    );
  }
}
