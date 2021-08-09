import React, { useCallback, useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks';
import { alternateState, changeStatus, getPeopleAsync, getToolsAsync } from '../state/personSlice';

const PersonList: React.FC = () => {

    const personState = useAppSelector(state => state.person);
    const dispatch = useAppDispatch();
    const { people, status, tools } = personState;

    const selectedPetType = useRef<HTMLSelectElement>(null);

    const getPeople = useCallback(() => {
        dispatch(getPeopleAsync());
        dispatch(getToolsAsync());

        console.log(selectedPetType.current?.value);

    }, [dispatch]);

    useEffect(() => {
        getPeople();
    }, [getPeople]);

    // TODO xUI: Need to do something

    return (
        <div>

            <hr />

            List of people

            {
                people && people.map(x => {
                    return (
                        <h2>{x.name}</h2>
                    )
                })
            }

            { people && people.length === 0 &&  <div>No People</div> }

            <hr />

            <div className="mb-3">
                <label className="form-label">Pet Types</label>
                <select className="form-select" ref={selectedPetType}>
                    <option value={-1}>Please Select</option>
                    {
                        (tools && tools.petTypes) && tools.petTypes.map((x, index) => {
                            return <option key={index} value={x.value}>{x.key}</option>
                        })
                    }
                </select>
            </div>

            <div className="btn-group">

                {
                    (status === 'loading') && (
                        <button className="btn btn-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...
                        </button>
                    )
                }

                {
                    status === 'idle' && (
                        <button className="btn btn-primary" type="button" onClick={() => { getPeople(); }}>
                            Search
                        </button>
                    )
                }

                <button className="btn btn-outline-primary" type="button" onClick={() => { dispatch(changeStatus('loading'));}}>
                    Change Status
                </button>

                <button className="btn btn-outline-primary" type="button" onClick={() => { dispatch(alternateState());}}>
                    Alternate State
                </button>

            </div>

        </div>
    );
};

export {
    PersonList
}