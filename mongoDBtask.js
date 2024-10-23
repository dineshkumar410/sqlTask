// Enter "mongosh" to enter db mode

// Enter use "zenDB" to create new db

// Users collection record
db.users.insertMany([
  {
    _id: "user1",
    name: "Dinesh",
    email: "dinesh@example.com",
    mentor_id: "mentor1",
    codekata_solved: 120,
    tasks_submitted: ["task1", "task2"],
    attendance: [
      { date: ISODate("2020-10-16"), status: "present" },
      { date: ISODate("2020-10-17"), status: "absent" },
    ],
    placement_drives: ["drive1", "drive4"],
  },
  {
    _id: "user2",
    name: "Kumar",
    email: "kumar@example.com",
    mentor_id: "mentor1",
    codekata_solved: 80,
    tasks_submitted: ["task2"],
    attendance: [
      { date: ISODate("2020-10-18"), status: "present" },
      { date: ISODate("2020-10-19"), status: "absent" },
    ],
    placement_drives: ["drive1"],
  },
  {
    _id: "user3",
    name: "John",
    email: "john@example.com",
    mentor_id: "mentor2",
    codekata_solved: 150,
    tasks_submitted: ["task3"],
    attendance: [
      { date: ISODate("2020-10-16"), status: "absent" },
      { date: ISODate("2020-10-18"), status: "present" },
    ],
    placement_drives: ["drive2"],
  },
  {
    _id: "user4",
    name: "Ram",
    email: "ram@example.com",
    mentor_id: "mentor2",
    codekata_solved: 90,
    tasks_submitted: ["task4"],
    attendance: [{ date: ISODate("2020-10-18"), status: "present" }],
    placement_drives: [],
  },
  {
    _id: "user5",
    name: "Faran",
    email: "faran@example.com",
    mentor_id: "mentor3",
    codekata_solved: 110,
    tasks_submitted: ["task5", "task6"],
    attendance: [{ date: ISODate("2020-10-19"), status: "absent" }],
    placement_drives: ["drive3"],
  },
  {
    _id: "user6",
    name: "Naresh",
    email: "naresh@example.com",
    mentor_id: "mentor3",
    codekata_solved: 130,
    tasks_submitted: ["task6"],
    attendance: [{ date: ISODate("2020-10-20"), status: "present" }],
    placement_drives: ["drive3"],
  },
  {
    _id: "user7",
    name: "David",
    email: "david@example.com",
    mentor_id: "mentor1",
    codekata_solved: 140,
    tasks_submitted: ["task1"],
    attendance: [{ date: ISODate("2020-10-21"), status: "absent" }],
    placement_drives: ["drive1", "drive4"],
  },
  {
    _id: "user8",
    name: "Suresh",
    email: "suresh@example.com",
    mentor_id: "mentor2",
    codekata_solved: 160,
    tasks_submitted: ["task2"],
    attendance: [{ date: ISODate("2020-10-22"), status: "present" }],
    placement_drives: ["drive2"],
  },
  {
    _id: "user9",
    name: "Shyam",
    email: "shyam@example.com",
    mentor_id: "mentor3",
    codekata_solved: 200,
    tasks_submitted: ["task3"],
    attendance: [{ date: ISODate("2020-10-23"), status: "absent" }],
    placement_drives: ["drive5"],
  },
  {
    _id: "user10",
    name: "Shiva",
    email: "shiva@example.com",
    mentor_id: "mentor2",
    codekata_solved: 180,
    tasks_submitted: ["task5"],
    attendance: [{ date: ISODate("2020-10-24"), status: "present" }],
    placement_drives: ["drive3", "drive4"],
  },
]);

//Codekata Collection
db.codekata.insertMany([
  {
    _id: "codekata1",
    user_id: "user1",
    problems_solved: 120,
  },
  {
    _id: "codekata2",
    user_id: "user2",
    problems_solved: 80,
  },
  {
    _id: "codekata3",
    user_id: "user3",
    problems_solved: 150,
  },
  {
    _id: "codekata4",
    user_id: "user4",
    problems_solved: 90,
  },
  {
    _id: "codekata5",
    user_id: "user5",
    problems_solved: 110,
  },
  {
    _id: "codekata6",
    user_id: "user6",
    problems_solved: 130,
  },
  {
    _id: "codekata7",
    user_id: "user7",
    problems_solved: 140,
  },
  {
    _id: "codekata8",
    user_id: "user8",
    problems_solved: 160,
  },
  {
    _id: "codekata9",
    user_id: "user9",
    problems_solved: 200,
  },
  {
    _id: "codekata10",
    user_id: "user10",
    problems_solved: 180,
  },
]);

//Attendance collection

db.attendance.insertMany([
  {
    _id: "attendance1",
    user_id: "user1",
    date: ISODate("2020-10-16"),
    status: "present",
  },
  {
    _id: "attendance2",
    user_id: "user2",
    date: ISODate("2020-10-18"),
    status: "present",
  },
  {
    _id: "attendance3",
    user_id: "user3",
    date: ISODate("2020-10-18"),
    status: "present",
  },
  {
    _id: "attendance4",
    user_id: "user4",
    date: ISODate("2020-10-18"),
    status: "present",
  },
  {
    _id: "attendance5",
    user_id: "user5",
    date: ISODate("2020-10-19"),
    status: "absent",
  },
  {
    _id: "attendance6",
    user_id: "user6",
    date: ISODate("2020-10-20"),
    status: "present",
  },
  {
    _id: "attendance7",
    user_id: "user7",
    date: ISODate("2020-10-21"),
    status: "absent",
  },
  {
    _id: "attendance8",
    user_id: "user8",
    date: ISODate("2020-10-22"),
    status: "present",
  },
  {
    _id: "attendance9",
    user_id: "user9",
    date: ISODate("2020-10-23"),
    status: "absent",
  },
  {
    _id: "attendance10",
    user_id: "user10",
    date: ISODate("2020-10-24"),
    status: "present",
  },
]);

//Topics Collection
db.topics.insertMany([
  {
    _id: "topic1",
    topic_name: "JavaScript Basics",
    date: ISODate("2020-10-10"),
  },
  {
    _id: "topic2",
    topic_name: "React Components",
    date: ISODate("2020-10-12"),
  },
  {
    _id: "topic3",
    topic_name: "Node.js",
    date: ISODate("2020-10-15"),
  },
  {
    _id: "topic4",
    topic_name: "MongoDB",
    date: ISODate("2020-10-18"),
  },
  {
    _id: "topic5",
    topic_name: "Express.js",
    date: ISODate("2020-10-20"),
  },
  {
    _id: "topic6",
    topic_name: "React Router",
    date: ISODate("2020-10-22"),
  },
  {
    _id: "topic7",
    topic_name: "HTML/CSS",
    date: ISODate("2020-09-05"),
  },
  {
    _id: "topic8",
    topic_name: "Authentication",
    date: ISODate("2020-10-25"),
  },
  { _id: "topic9", topic_name: "Redux", date: ISODate("2020-10-27") },
  {
    _id: "topic10",
    topic_name: "Hooks in React",
    date: ISODate("2020-11-30"),
  },
]);

//tasks Collection
db.tasks.insertMany([
  {
    _id: "task1",
    task_name: "Build a Todo App",
    date: ISODate("2020-09-15"),
    submitted_by: ["user1", "user7"],
  },
  {
    _id: "task2",
    task_name: "Create a Portfolio",
    date: ISODate("2020-10-16"),
    submitted_by: ["user2", "user8"],
  },
  {
    _id: "task3",
    task_name: "Implement JWT Authentication",
    date: ISODate("2020-10-17"),
    submitted_by: ["user3", "user9"],
  },
  {
    _id: "task4",
    task_name: "Build a Blog Platform",
    date: ISODate("2020-10-18"),
    submitted_by: ["user4"],
  },
  {
    _id: "task5",
    task_name: "Deploy Node App",
    date: ISODate("2020-11-20"),
    submitted_by: ["user5", "user10"],
  },
  {
    _id: "task6",
    task_name: "Create a Chat Application",
    date: ISODate("2020-10-22"),
    submitted_by: ["user6"],
  },
  {
    _id: "task7",
    task_name: "Build a Weather App",
    date: ISODate("2020-11-24"),
    submitted_by: [],
  },
  {
    _id: "task8",
    task_name: "Create a Note Taking App",
    date: ISODate("2020-10-26"),
    submitted_by: [],
  },
  {
    _id: "task9",
    task_name: "Integrate Redux in App",
    date: ISODate("2020-10-28"),
    submitted_by: [],
  },
  {
    _id: "task10",
    task_name: "Complete E-Commerce App",
    date: ISODate("2020-10-30"),
    submitted_by: [],
  },
]);

// company_drives Collection
db.company_drives.insertMany([
  {
    _id: "drive1",
    company_name: "Google",
    drive_date: ISODate("2020-09-18"),
    students_appeared: ["user1", "user2"],
  },
  {
    _id: "drive2",
    company_name: "Amazon",
    drive_date: ISODate("2020-10-10"),
    students_appeared: ["user3", "user8"],
  },
  {
    _id: "drive3",
    company_name: "Facebook",
    drive_date: ISODate("2020-10-22"),
    students_appeared: ["user5", "user6", "user10"],
  },
  {
    _id: "drive4",
    company_name: "Microsoft",
    drive_date: ISODate("2020-10-25"),
    students_appeared: ["user1", "user7", "user10"],
  },
  {
    _id: "drive5",
    company_name: "Netflix",
    drive_date: ISODate("2020-11-02"),
    students_appeared: ["user9"],
  },
]);

//Mentors collections
db.mentors.insertMany([
  {
    _id: "mentor1",
    mentor_name: "Ajith",
    mentees: ["user1", "user2", "user7"],
  },
  {
    _id: "mentor2",
    mentor_name: "Vijay",
    mentees: ["user3", "user4", "user8", "user10"],
  },
  {
    _id: "mentor3",
    mentor_name: "Karthik",
    mentees: ["user5", "user6", "user9"],
  },
]);

// 1. Find all the topics and tasks which are thought in the month of October
// Topics in October are found using greater than or equal to starting date and lesser than next month
db.topics.find({
  date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-11-01"),
  },
});

// Topics in October are found using greater than or equal to starting date and lesser than next month
db.tasks.find({
  date: {
    $gte: ISODate("2020-10-01"),
    $lt: ISODate("2020-11-01"),
  },
});

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// Company appeared during mentioned dates are found using greater than or equal to starting date and lesser than equal to ending date
db.company_drives.find({
  drive_date: {
    $gte: ISODate("2020-10-15"),
    $lte: ISODate("2020-10-31"),
  },
});

// 3. Find all the company drives and students who are appeared for the placement.
// Checking user present in company_appeared collection and getting the user data from users collection
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "students_appeared",
      foreignField: "_id",
      as: "students",
    },
  },
]);

// 4. Find the number of problems solved by the user in codekata
// Fetching codekata solved from users collection
db.users.find({}, { codekata_solved: 1 });

// 5. Find all the mentors with who has the mentee's count more than 15
// Using where clause to fing length of array of mentees field
db.mentors.find({
  $where: "this.mentees.length > 15",
});

// 6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
// Using aggreate to combine results
// lookup the collection
// match is used to give the query conditions
db.users.aggregate([
  {
    $lookup: {
      from: "attendance",
      localField: "_id",
      foreignField: "user_id",
      as: "attendance_data",
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "_id",
      foreignField: "submitted_by",
      as: "task_data",
    },
  },
  {
    $match: {
      "attendance_data.date": {
        $gte: ISODate("2020-10-15"),
        $lte: ISODate("2020-10-31"),
      },
      "attendance_data.status": "absent",
      "task_data.date": { $ne: ISODate("2020-10-15") },
    },
  },
]);
