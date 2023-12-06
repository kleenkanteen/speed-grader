'use client'
import * as React from 'react';
import { useState } from 'react';

export default function Home() {
    const [userType, setUserType] = useState('');
    const [classCode, setClassCode] = useState('');
    const [fileInput, setFileInput] = useState<File | null>(null);

    const getClassCode = async () => {
        try {
            const response = await fetch('/api/class-code');
            const data = await response.json();
            setClassCode(data.code);
        } catch (error) {
            console.error('Error fetching class code:', error);
        }
    };

    const handleUserTypeChange = (type: string) => {
        setUserType(type);
        if (type === 'teacher') {
            getClassCode();
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileInput(e.target.files[0] as File);
        } else {
            setFileInput(null);
        }
    };

    return (
        <div>
            <div className='flex flex-col items-center gap-4'>
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Are you a teacher or student?</h2>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Teacher</span>
                      <div className="w-4"></div>
                      <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked={userType === 'teacher'} onChange={() => handleUserTypeChange('teacher')} />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Student</span>
                      <div className="w-4"></div>
                      <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={userType === 'student'} onChange={() => handleUserTypeChange('student')} />
                    </label>
                  </div>
                </div>
                {userType === 'teacher' && classCode && (
                    <p>Your class code: {classCode}</p>
                )}
                {userType === 'student' && (
                    <div className='flex flex-col items-center gap-8'>
                        <div className="form-control">
                            <label className="label">
                            <h2 className="text-md font-bold">Enter class code: </h2>
                                <div className="w-4"></div>
                                <input type="text" className="input input-bordered input-primary h-8 max-w-xs" value={classCode || ''} onChange={(e) => setClassCode(e.target.value)} />
                            </label>
                        </div>
                        <h2 className="text-md font-bold">Upload your files: </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileInputChange} />
                        <h2 className="text-md font-bold">View your past submissions: </h2>
                        <div className="overflow-x-auto rounded-lg border">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Paper Name</th>
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                    </div>
                )}
            </div>
        </div>
    );
}