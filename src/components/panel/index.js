import React from 'react';
import './style.css';

const panel = () => {
  const data = [
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'some test'
    }
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <div className="container-fluid">
              <div className="row">
                <>
                  {data.length > 0
                    ? data.map(d => (
                        <div className="col-sm-4">
                          <div className="divCard">
                            <table className="tableWidth">
                              <tr>
                                <td>
                                  <h1 className="centerText">
                                    <i className="fas fa-cloud" />
                                  </h1>
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
            <button type="button" class="btn btn-info buttonBig success">
              <span>
                <i className="fas fa-sync" />
                {' RE PROCESS'}
              </span>
            </button>
            <button type="button" class="btn btn-light buttonBig">
              <span>
                <i className="fas fa-edit" />
                {' REDACT'}
              </span>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default panel;
