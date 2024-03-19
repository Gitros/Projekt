import React, { useEffect, useState } from 'react';
import User from '../models/user';
import { Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Users: React.FC<{}> = () => {
    const [availablePeople, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    async function fetchUsers(): Promise<User[]> {
        try {
            const response = await fetch('http://localhost:5000/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const users = await response.json() as User[];
            return users;
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                setError('error');
            }
        }
        fetchData();
    }, []);

    

    return (
        <>
       <MainNavigation />
        <div>
            {error && <div>Error: {error}</div>}
            <ul>
                {availablePeople.map((item) => (
                    <li key={item.id}>{item.name} {item.lastName}</li>
                ))}
            </ul>
            <p>
                Go to <Link to="/user">this user</Link>
            </p>
        </div>
        </>
    );
};

export default Users;
