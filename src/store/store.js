import { useEffect, useState } from "react";

let globalState = {};
//

let listeners = [];
// Array full of functions, called to update the components using the hook

let actions = {};
//

// create custom hook store
export const useStore = () => {
	// Get the function updating the state
	const setState = useState(globalState)[1];

	// Create a function taking an action from actions object,
	// this action produces a function on the globalState
	const dispatch = (actionId, payload) => {
		const newState = actions[actionId](globalState, payload);
		// Get a newState from the action on the globalState
		globalState = { ...globalState, ...newState };
		//

		for (const listener of listeners) {
			listener(globalState);
			// update the state with the new globalState
			// then React re-render all the components using this custom hook
		}
	};

	useEffect(() => {
		listeners.push(setState);
		// push this custom hook update to listeners array

		return () => {
			listeners = listeners.filter((listen) => listen !== setState);
			// when a component is unmount, this removes its listener
		};
	}, [setState]);

	return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState };
		// merge all the global state, with this unique state
	}

	actions = { ...actions, ...userActions };
	// merge all actions, with these currents actions
};
