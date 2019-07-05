import React from 'react'
import { getChampionRotationID, getChampionsTiles, getChampionsID } from '../utils.js'
import { t } from '../i18n.js'

export default class ChampionRotation extends React.Component
{
  render() {

    const free_championsID = getChampionRotationID()
    const tiles = getChampionsTiles()
    const champs = getChampionsID()
    return(
      <div className='container mb-3 mt-3'>
        <div className="bg-dark-transparent">
          <div className="row">
            <div className="col-6 pl-5 pr-4 mt-3 mb-3 info-panel">
              <h2 className="border-amumu-3">{t("champion_rotation.title")}</h2>
              <p>{t("champion_rotation.text")}</p>
              <div className="row  pl-2 tier-images">
              {
                free_championsID.map((id, index) =>
                <img
                  key={index}
                  width={64}
                  height={64}
                  className="m-1"
                  src={tiles[champs[id]]}
                  title={champs[id]}
                  alt={champs[id]}
                />
                )
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
