import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { history } from "../../utils/history";
import { add, update, getNextEmpId, selectEmployees, Employee } from "./employeeSlice";
import { useLocation } from 'react-router';
import ProtectedRoute from "../ProtectedRoute";
import classNames from 'classnames';
import { useFormik } from 'formik';

import * as yup from 'yup';

export default function EmployeeView() {

    const employeeList: Employee[] = useAppSelector(selectEmployees);
    const nextEmpId: number = useAppSelector(getNextEmpId);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState("0");
    const [dob, setDob] = useState('');
    const [mode, setMode] = useState('new');
    const [title, setTitle] = useState("Add Employee");
    const dispatch = useAppDispatch();
    const location = useLocation();

    const idRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const dobRef = useRef<HTMLInputElement>(null);
    const deptRef = useRef<HTMLSelectElement>(null);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Name: name || '',
            Email: email || '',
            DOB: dob || '',
        },

        validationSchema: yup.object({
            Name: yup.string()
                .max(20, 'Name should not exceed 20 Characters')
                .required('Please provide Employee Name'),
            Email: yup.string()
                .required("Please provide Email").email('Please provide Valid Email'),
            DOB: yup.string().required('Please provide DOB'),
        }),

        onSubmit: () => {
            save();
        }

    });

    useEffect(() => {
        const empIdForEdit = location.search;

        console.log('loaded')
        if (empIdForEdit) {
            const employee: any = employeeList.find(emp => emp.id === parseInt(empIdForEdit.substring(1)));
            if (employee) {
                setName(employee.name);
                setId(employee.id);
                setEmail(employee.email);
                setDob(employee.dob);
                setDepartment(employee.department);
                console.log(department);

                if (location.pathname === '/dashboard/view') {
                    setMode('view');
                    setTitle('View Employee')
                } else {
                    setMode('edit');
                    setTitle('Edit Employee')
                }
                console.log("employee " + JSON.stringify(employee));
            }
        } else {
            setTitle('Add Employee')
            setName("");
            setMode('new');
            setId("");
            setEmail("");
            setDob("");
            setDepartment("0");
        }
    }, [location]);

    const save = () => {

        const data: Employee = {
            id: nextEmpId,
            dob: dobRef?.current?.value,
            name: nameRef?.current?.value,
            department: deptRef?.current?.value,
            email: emailRef?.current?.value,
        };

        if (mode === 'edit') {
            data.id = parseInt(id);
            dispatch(update(data));
        } else {
            dispatch(add(data));
        }
        history.push('/dashboard/list');
    }

    const onDeptChange = (e: any) => {
        console.log(deptRef.current?.value);
        const currentSelection = deptRef.current?.value !== undefined ? deptRef.current?.value : department;
        setDepartment(currentSelection);
    }

    return (

        <ProtectedRoute>

            <Container fluid>
                <Row>
                    <Col>
                        <Container fluid className={classNames('p-0', 'm-0')}>
                            <Row>
                                <Col sm={5}>
                                    <h4 className={classNames('text-primary')}>
                                        {title}
                                    </h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form style={{ width: '50%' }} onSubmit={formik.handleSubmit}>
                                        {mode !== 'new' && (
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Employee Id</Form.Label>
                                                <Form.Control type="text" placeholder="Employee Id" defaultValue={id} ref={idRef} disabled />
                                            </Form.Group>
                                        )}
                                        <Form.Group className="mb-3" controlId="formName">
                                            <Form.Label htmlFor="Name">Name</Form.Label>
                                            <Form.Control autoComplete="false" {...formik.getFieldProps("Name")} type="text" placeholder="Enter Name" ref={nameRef} disabled={mode === 'view'} />
                                            {formik.touched.Name && formik.errors.Name ? <span style={{ color: 'red' }}>{formik.errors.Name}</span> : null}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>E-Mail</Form.Label>
                                            <Form.Control autoComplete="false" {...formik.getFieldProps("Email")} placeholder="Enter email" ref={emailRef} disabled={mode === 'view'} />
                                            {formik.touched.Email && formik.errors.Email ? <span style={{ color: 'red' }}>{formik.errors.Email}</span> : null}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control autoComplete="false" {...formik.getFieldProps("DOB")} type="text" placeholder="Date of Birth" ref={dobRef} disabled={mode === 'view'} />
                                            {formik.touched.DOB && formik.errors.DOB ? <span style={{ color: 'red' }}>{formik.errors.DOB}</span> : null}
                                        </Form.Group>
                                        <Form.Label>Department</Form.Label>
                                        <Form.Select className="mb-3" aria-label="Department" ref={deptRef} value={department} onChange={onDeptChange} disabled={mode === 'view'} >
                                            <option></option>
                                            <option value="1">Software</option>
                                            <option value="2">Consultant</option>
                                        </Form.Select>
                                        {mode !== 'view' && (
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>)
                                        }
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </ProtectedRoute>
    )
}