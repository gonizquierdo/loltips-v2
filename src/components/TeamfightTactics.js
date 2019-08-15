import React from 'react';
import { t, locale } from '../i18n.js';
import { getPatchData } from '../utils.js';
import icon from '../assets/TTF_Items.png';
import { Link, Route, Switch } from 'react-router-dom';


export default class TeamfightTactics extends React.Component {
    props: {
        patch: 'string',
        patch_data: Object
    }


    render() {
        return (
            <div className="container mt-3 mb-3">
                <div className="shadow p-3 bg-dark-new text-light rounded-right rounded-bottom text-justify">
                    
                        <div className="row links pt-1 align-self-start">
                            <div className="col-auto"><Link to="/tft/"><h5>Notes</h5></Link></div>
                            <div className="col-auto"><Link to="/tft/cheatsheet/"><h5>CheatSheet</h5></Link></div>
                        </div>
                    

                    <Switch>
                        <Route path={"/tft"} component={notes} />
                        <Route path={"/tft/cheatsheet"} component={sheet} />
                    </Switch>

                </div>
            </div>
        )
    }
}

function get_link_for_language() {
    const lang = locale();
    if (lang === 'en') {
        return 'https://na.leagueoflegends.com/en/news/game-updates/patch/teamfight-tactics-915-notes';
    }
    else {
        return 'https://las.leagueoflegends.com/es/news/game-updates/patch/notas-de-la-version-915-de-teamfight-tactics';
    }
}

function notes() {
    const link = get_link_for_language()
    const patch_data = getPatchData("915");
    return (
        <div className="info-panel">
            <h2 className="border-blue-3">Patch Notes</h2>
            <div>
                <p>{t('patch_notes.summary')}</p>
            </div>

            <div>
                <h4> {t('patch_notes.tactical_buffs')}</h4>
                <ul>
                    {
                        patch_data.tft.buffs.map((buff, index) =>
                            <li key={index}>{buff}</li>
                        )
                    }
                </ul>
                <h4> {t('patch_notes.strategic_nerfs')}</h4>
                <ul>
                    {
                        patch_data.tft.nerfs.map((nerf, index) =>
                            <li key={index}>{nerf}</li>
                        )
                    }
                </ul>
                <h4> {t('patch_notes.tft_updates')}</h4>
                <ul>
                    {
                        patch_data.tft.updates.map((update, index) =>
                            <li key={index}>{update}</li>
                        )
                    }
                </ul>
            </div>
            <div className="text-center w-100">
                <a href={link} target="_new">
                    <button type="button" className="btn btn-scattler">{t('patch_notes.official_notes')}</button>
                </a>
            </div>
        </div>
    )
}


function sheet() {
    return (
        <div className="info-panel mt-5">
            <h2 className="border-blue-3">Cheat Sheet</h2>
            <p>{t('cheatsheet')}</p>
            <img src={icon} className="mt-2 img-fluid rounded" alt="cheatsheet" data-toggle="tooltip" data-placement="top" title="TFT CheatSheet" />
        </div>
    )
}
