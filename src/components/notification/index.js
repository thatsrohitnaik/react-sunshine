import React from 'react';
import './style.css';

const panel = props => {
  const { notificationData = [] } = props;

  return (
    <>
      <div className="gutter-space">
        <div className="row">
          <div className="col-sm-8">
            <div className="">
              <div className="row">
                <>
                  {notificationData.length > 0
                    ? notificationData.map(d => (
                        <div className="col-sm-4">
                          <div className="div-card">
                            <table className="tableSize">
                              <tr>
                                <td className="tdWidth">
                                  <h3 className="centerText">
                                    <i className={d.icon} />
                                  </h3>
                                </td>
                                <td>
                                  <table>
                                    <tr>
                                      <p className="pMargin">{d.count}</p>
                                    </tr>
                                    <tr>
                                      <p className="pMargin">{d.text}</p>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      ))
                    : null}
                </>{' '}
              </div>
            </div>
          </div>
          <div className="col-sm-4 displayFlex">
            <button type="button" className="btn btn-info button-big success">
              <span>
                <i className="fas fa-sync" />
                {' RE PROCESS'}
              </span>
            </button>
            <button type="button" className="btn btn-light button-big">
              <span>
                <i className="fas fa-edit" />
                {' REDACT'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default panel;
