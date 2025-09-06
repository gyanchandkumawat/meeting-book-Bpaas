import React, { useState } from 'react'
import '../assets/css/Meeting.css'
import TablePagination from '@mui/material/TablePagination';
import SendIcon from '@mui/icons-material/Send';
import GroupsIcon from '@mui/icons-material/Groups';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';

import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
import c3 from './images/c3.jpg'
export default function MeetingBook() {
    // pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    const columns = [
        { title: "Date", feild: "date" },
        { title: "Time Schedule", feild: "timeschedule"},
        { title: "Duration", feild: "duration"},
        { title: "Name", feild: "name"},
    ]
    const rows = [
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },
        {
            "date": "01 Sep 2022",
            "timeschedule": "1pm-2pm",
            "duration": "60 Min.",
            "name": "Ashish Kumar",
        },

    ]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="card main-card">
                            <div className="card-body">
                                <h2>Logo</h2>
                                <div className="card-header  main-card-header text-center"><marquee>Welcome to Book your meeting </marquee></div>
                                <p className='gk-information text-center'>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolores! dolor sit amet consectetur adipisicing elit. Aspernatur mollitia vero neque quis quod est omnis dolores modi inventore voluptate, assumenda eius temporibus ratione animi totam pariatur et minim</p>
                            </div>
                            <div className="card-footer main-card-footer">
                                <button className='btn btn-warning main-card-footer-btn'>More info</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card main-card">
                            <div className="card-body">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={c1} class="d-block" width={535} height={230} alt="..." />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={c2} class="d-block" width={535} height={230} alt="..." />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={c3} class="d-block" width={535} height={230} alt="..." />
                                        </div>
                                        <div class="centered">Book Your <br /> Meeting <br />Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-warning second-main-card-footer-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Book here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="card datatable-card">
                            <div className="card-body data-table-card-body">
                            <div className="table-responsive" style={{ maxHeight: 1000 }} >
                            <table className='table bg-light' id="table-to-xls">
                                <thead className='datatable-head '>
                                    {
                                        columns.map((col, key) => {
                                            return (
                                                <th key={key} className=' text-dark p-1' style={{ fontSize: "14px", textAlign: "center" }}>
                                                    {col.title}
                                                </th>
                                            )
                                        })
                                    }
                                </thead>
                                <tbody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, mykey) => {
                                        return (
                                            <tr style={{ lineHeight: "6px", textAlign: "center" }}>
                                                <td>{row.date}</td>
                                                <td>{row.timeschedule}</td>
                                                <td>{row.duration}</td>
                                                <td>{row.name}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        <TablePagination className="table-pagination"
                            rowsPerPageOptions={[9, 15, 20, 50]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>


            {/* meeting form modal */}
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content  meeting-modal-container">
                        <div class="modal-header meeting-form-modal-title">
                            <h5 class="modal-title" id="exampleModalLabel"><GroupsIcon className='text-warning meeting-GroupsIcon'/> Book Your Meeting</h5>
                            <button type="button" class="meeting-btn-close" data-bs-dismiss="modal" aria-label="Close"><CloseIcon className='text-dark'/></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label for="name" class="form-label">Your Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" class="form-control meeting-form-input" id="name" placeholder="Enter your name" aria-describedby="name" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label for="meetingdate" class="form-label">Select Date</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="date" class="form-control meeting-form-input" id="meetingdate" aria-describedby="date" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label for="time" class="form-label">Start Time</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="time" class="form-control meeting-form-input" id="starttime" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <label for="time" class="form-label">End Time</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="time" class="form-control meeting-form-input" id="endtime" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div class="modal-footer meeting-form-modal-footer">
                                    <button type="button" class="p-1 bg-warning modal-form-send-button">Send <SendIcon className="text-dark" /></button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
