import React from 'react'
import NavbarUser from "../navbar/NavbarUser";
import "./Create.css"

let create = (props) => {
    let {
        userData,
        changeFile,
        createGroup,
        name,
        setName,
        game,
        setGame,
        discord,
        setDiscord,
        description,
        setDescription
    } = props;

    let isSelectedChange = false;

    function handleChange(e) {
        isSelectedChange = true;
        setGame(e.target.value);
    }

    function handleGroup() {
        if(!isSelectedChange) {
            setGame("LeagueofLegends");
        }
        if(game !== ""){
            createGroup();
        }
    }

    return (
        <div className="create">
         	<div className="section">
             <NavbarUser userData = {userData}/>
             <div className="content">
                <div className="create-container">
                    <div className="create-header">
                        <h2>Create a Group</h2>
                    </div>
                    <div className="create-form">
                        <div className="create-input-container group-name">
                            <label 
                                className="create-label" 
                                htmlFor="create-group-name">Group Name</label>
                            <input 
                                placeholder="Enter your Group Name" 
                                id= "create-group-name" 
                                className="input" 
                                type="text" 
                                required 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className="create-input-container choose-game">
                            <label htmlFor="game">Choose a Game:</label>
                            <select name="game" id="game" value={game} onChange={handleChange}>
                                <option value="LeagueofLegends">League of Legends</option>
                                <option value="AmongUs">Among Us</option>
                                <option value="Minecraft">Minecraft</option>
                                <option value="Genshin">Genshin Impact</option>
                                <option value="Smash">Smash</option>
                                <option value="Valorant">Valorant</option>
                                <option value="Phasmophobia">Phasmophobia</option>
                            </select>
                        </div>
                        <div className="create-input-container discord-link">
                             <label 
								className="create-label"
						        htmlFor="create-discord-link">Messaging Invite Link</label>
                             <input 
								placeholder="Enter your invite link (i.e. Discord)"
								id= "create-discord-link" 
								className="input" 
								type="text" 
								required 
                                value={discord} 
                                onChange={(e) => setDiscord(e.target.value)}></input>
                         </div>
                        <div>
                            <div className="create-input-container Description">
                                <label 
                                    className="create-label" 
                                    htmlFor="create-Description">Description</label>
                                <input 
								    placeholder="Enter your Group Description" 
									id= "create-Description" 
									className="input" 
									type="text" 
								    required 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="create-input-container create-last">
                            <label className="create-" htmlFor="group-img">Upload a Group Image</label>
                            <input id="group-img" type="file" onChange={changeFile}/>
                        </div>
                        <div>
                            <button onClick={handleGroup} className="create-button">
                                Create Group
                            </button>
                        </div>
                    </div>
                 </div>
             </div>
         </div>
     </div>
    )
}

export default create
