import { Container, Button, Col, Row, } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import classNames from 'classnames';
import styles from './employeeList.module.css';

import { history } from '../../utils/history';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { remove, selectEmployees } from '../Employee/employeeSlice';

import ProtectedRoute from '../ProtectedRoute';

enum ActionType {
  VIEW,
  EDIT,
  DELETE,
}

function EmployeeList() {

  const employeeData: any = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();

  const columnHeaderStyle: any = {
    textAlign: 'center',
    backgroundColor: '#fafafa',
  };

  const actionHeaderStyle: any = {
    textAlign: 'center',
    backgroundColor: '#fafafa',
    padding: '-1.4rem',
    width: '120px',
  }

  const onAction = (type?: ActionType, row?: any) => {

    if (type === ActionType.VIEW) {
      history.push('/dashboard/view?' + row.id);
    }

    if (type === ActionType.EDIT) {
      history.push('/dashboard/edit?' + row.id);
    }

    if (type === ActionType.DELETE) {
      dispatch(remove(row.id));
    }
  };

  const formatDept = (cell: any, row?: any) => {
    if (row.department === '1') {
      return 'Software';
    } else if (row.department === '2') {
      return 'Consultant';
    } else {
      return '';
    }
  }

  const actions = (cell: any, row: any) => (
    <Row>
      <Col>
        <Button variant="link" className={classNames(styles.actionButton)}
          onClick={() => { onAction(ActionType.VIEW, row); }}
        >
          <FontAwesomeIcon color="black" icon={faEye} />
        </Button>
        <Button variant="link" className={classNames(styles.actionButton)}
          onClick={() => { onAction(ActionType.EDIT, row); }}
        >
          <FontAwesomeIcon color="green" icon={faEdit} />
        </Button>
        <Button variant="link" className={classNames(styles.actionButton)}
          onClick={() => { onAction(ActionType.DELETE, row); }}
        >
          <FontAwesomeIcon color="red" icon={faTrashAlt} />
        </Button>
      </Col>
    </Row>
  );

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
      headerStyle: columnHeaderStyle,
      classes: classNames(styles.column),
    },
    {
      dataField: 'name',
      text: 'Name',
      headerStyle: columnHeaderStyle,
      classes: classNames(styles.column),
    },
    {
      dataField: 'email',
      text: 'Email',
      headerStyle: columnHeaderStyle,
      classes: classNames(styles.column),
    },
    {
      dataField: 'dob',
      text: 'DOB',
      headerStyle: columnHeaderStyle,
      classes: classNames(styles.column),
    },
    {
      dataField: 'department',
      text: 'Department',
      headerStyle: columnHeaderStyle,
      classes: classNames(styles.column),
      formatter: formatDept
    },
    {
      dataField: 'action',
      text: 'Action',
      headerStyle: actionHeaderStyle,
      formatter: actions,
      classes: classNames(styles.actionButton),
    },
  ];

  return (
    <>
      <ProtectedRoute>

        <Container fluid>
          <Row>
            <Col>
              <Container fluid className={classNames('p-0', 'm-0')}>
                <Row>
                  <Col sm={5}>
                    <h4 className={classNames('text-primary')}>
                      Employee List
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Container fluid className={classNames('p-0', 'm-0',)}>
                      <Row>
                        <Col>
                          <BootstrapTable
                            bootstrap4
                            keyField="id"
                            data={employeeData || []}
                            columns={columns}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </ProtectedRoute>
    </>
  );
}

export default EmployeeList;