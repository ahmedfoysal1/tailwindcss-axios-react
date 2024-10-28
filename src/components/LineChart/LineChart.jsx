import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 78, physicsMarks: 82, chemistryMarks: 90 },
        { id: 2, name: "Bob", mathMarks: 85, physicsMarks: 88, chemistryMarks: 78 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 95, chemistryMarks: 85 },
        { id: 4, name: "Daisy", mathMarks: 88, physicsMarks: 80, chemistryMarks: 86 },
        { id: 5, name: "Ethan", mathMarks: 74, physicsMarks: 70, chemistryMarks: 75 },
        { id: 6, name: "Fiona", mathMarks: 81, physicsMarks: 83, chemistryMarks: 89 },
        { id: 7, name: "George", mathMarks: 69, physicsMarks: 72, chemistryMarks: 68 },
        { id: 8, name: "Hannah", mathMarks: 95, physicsMarks: 90, chemistryMarks: 93 },
        { id: 9, name: "Ian", mathMarks: 77, physicsMarks: 78, chemistryMarks: 80 },
        { id: 10, name: "Jane", mathMarks: 89, physicsMarks: 85, chemistryMarks: 92 }
      ];
      
      

    return (
        <div className='w-11/12 mx-auto'>
            <BarChart width={1100} height={400} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
        <Bar dataKey="mathMarks" fill='skyblue'></Bar>
        <Bar dataKey={'physicsMarks'} fill='gray'></Bar>
        <Bar dataKey={'chemistryMarks'} fill='#8884d8'></Bar>
            </BarChart>
        </div>
    );
};

export default LineChart;