import React, { useEffect, useState } from 'react';
import User from '../models/user';

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
        <div>
            {error && <div>Error: {error}</div>}
            <ul>
                {availablePeople.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
