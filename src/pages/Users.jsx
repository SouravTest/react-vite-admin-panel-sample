// pages/Users.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch Users
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') // Example API
      .then(res => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter when search changes
  useEffect(() => {
    const result = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(result);
  }, [search, users]);

  // Table Columns
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '70px',
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.phone,
    },
    {
      name: 'Actions',
      cell: row => (
        <button className="btn btn-sm btn-outline-primary">
          View
        </button>
      ),
    },
  ];

  // Custom Export (CSV)
  const exportCSV = () => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Phone'],
      ...filteredUsers.map(user => [user.id, user.name, user.email, user.phone]),
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'users.csv';
    link.click();
  };

  return (
    <div className="container mt-4 card p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Users List</h3>
        <button className="btn btn-success" onClick={exportCSV}>
          Export CSV
        </button>
      </div>

      {/* Search */}
      <input
        type="search"
        placeholder="Search by name or email..."
        className="form-control mb-3"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={filteredUsers}
        pagination
        highlightOnHover
        striped
        responsive
        paginationRowsPerPageOptions={[5, 10, 15, 25, 50]}
        defaultSortFieldId={1}
      />
    </div>
  );
};

export default Users;
