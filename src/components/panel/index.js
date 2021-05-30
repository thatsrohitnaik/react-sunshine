import React from 'react';
import './style.css';

const panel = () => {
  const data = [
    {
      icon: 'fas fa-share-alt',
      count: 133,
      text: 'Share with DS'
    },
    {
      icon: 'fas fa-unlink',
      count: 300,
      text: 'Not released'
    },
    {
      icon: 'fas fa-ban',
      count: 0,
      text: 'spam'
    },
    {
      icon: 'fas fa-cloud',
      count: 2,
      text: 'Related - Do Not Share'
    },
    {
      icon: 'fas fa-copy',
      count: 2,
      text: 'Duplicates'
    }
  ];

  return (
    <>
      <div className="gutterSpace">
        <div className="row">
          <div className="col-sm-8">
            <div className="">
              <div className="row">
                <>
                  {data.length > 0
                    ? data.map(d => (
                        <div className="col-sm-4">
                          <div className="divCard">
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
