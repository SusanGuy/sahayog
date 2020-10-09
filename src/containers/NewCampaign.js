import React, { useRef, useState } from 'react';
import './NewCampaign.scss';
import DatePicker from 'react-datepicker';
import * as Icons from 'react-feather';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
const NewCampaign = () => {
    const handleUploadClick = useRef(null);
    const [ files, setfiles ] = useState([]);
    const [ campName, setcampName ] = useState('');
    const [ campStory, setcampStory ] = useState('');
    const [ campGoal, setcampGoal ] = useState(0);
    const [ endDate, setendDate ] = useState(moment().add(5, 'days').toDate());
    const [ uploadFiles, setuploadfiles ] = useState([]);
    const handleFileChange = (e) => {
        setuploadfiles([ ...uploadFiles, e.target.files[0] ]);
        setfiles([ ...files, URL.createObjectURL(e.target.files[0]) ]);
    };

    return (
        <div className='NewCampaign'>
            <div className='title'>
                <span>Start New Campaign</span>
                <Icons.XCircle />
            </div>

            <div className='campaign-form-div'>
                <div className='input-div'>
                    <label>Campaign Name</label>
                    <input type='text' onChange={(e) => setcampName(e.target.value)} value={campName} />
                </div>
                <div className='input-div'>
                    <label>Campiagn Story</label>
                    <textarea
                        width='100%'
                        type='textarea'
                        onChange={(e) => setcampStory(e.target.value)}
                        value={campStory}
                    />
                </div>
                <div className='input-div'>
                    <label>Campaign Goal</label>
                    <input type='number' onChange={(e) => setcampGoal(e.target.value)} value={campGoal} />
                </div>
                <div className='input-div'>
                    <label>End Date</label>
                    <DatePicker
                        id='date-picker'
                        selected={endDate}
                        onChange={(date) => {
                            setendDate(date);
                        }}
                        minDate={moment().add(1, 'days').toDate()}
                    />
                </div>
                <div className='input-div file-div'>
                    <div className='fileupload'>
                        <label> Upload Images </label>
                        <input
                            type='file'
                            style={{ display: 'none' }}
                            ref={handleUploadClick}
                            onChange={handleFileChange}
                            multiple
                        />
                    </div>
                    <div className='new-images'>
                        {files.length !== 0 &&
                            files.map((a) => (
                                <div key={a} className='new-image-div'>
                                    <span>
                                        <div
                                            className='cross'
                                            onClick={() => {
                                                setuploadfiles(
                                                    uploadFiles.filter((file) => URL.createObjectURL(file) !== a)
                                                );
                                                setfiles(files.filter((file) => file !== a));
                                            }}
                                        >
                                            <Icons.XCircle size={'2rem'} color={'white'} fill={'red'} />
                                        </div>
                                    </span>
                                    <img className='new-image' src={a} />
                                </div>
                            ))}

                        <div
                            className='new-image-button'
                            onClick={() => {
                                handleUploadClick.current.click();
                            }}
                        >
                            <Icons.Plus />
                        </div>
                    </div>
                </div>

                <div className='submit-button-div'>
                    <button className='submit-button'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default NewCampaign;
