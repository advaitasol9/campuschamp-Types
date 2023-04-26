type entity = {
  name: string;
  id: string;
  externalID: string;
  description: string;
  createdDateTime: Date;
  modifiedDateTime: Date;
};

type person = {
  photo: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: "Male" | "Female";
  dateOfBirth: Date;
  age: number;
  placeOfBirth: string;
  casteCategory: caste;
  subCaste: subCaste;
  motherTongue: language;
  nationality: nationality;
  religion: religion;
  bloodGroup: bloodGroup;
  doorNumber: string;
  city: string;
  district: string;
  state: state;
  pinCode: number;
  primaryMobileNumber: string;
  secondaryMobileNumber: string;
  emailID: string;
  isRuralOrUrban: "rural" | "urban";
};

//general entities

type educationLevel = entity & {};

type gradeGroup = entity & {};

type nationality = entity & {};

type state = entity & { nationality: nationality };

type religion = entity & {};

type caste = entity & { religion: religion };

type subCaste = entity & { caste: caste };

type language = entity & {};

type bloodGroup = entity & {};

type schoolMode = entity & {};

type occupation = entity & {};

type relationship = entity & {};

type maritalStatus = entity & {};

type workStatus = entity & {};

type file = entity & { name: string; url: string };

// general school entities

type subjectDuration = entity & {
  period: "week" | "month" | "year";
  numberOfHours: number;
};

type examType = entity & {};

type jobRole = entity & {};

type deisgnation = entity & {};

enum languageProficiencyLevel {
  "read",
  "write",
  "speak",
}

type languageProficiency = entity & {
  level: languageProficiencyLevel[];
};

// mandatory school entities

type medium = entity & {};

type grade = entity & {
  academicYear: Date;
  type: educationLevel;
  group: gradeGroup;
  subjectHODs: string[];
  coordinator: string;
  numberOfStudents: number;
  numberOfBoys: number;
  numberOfGirls: number;
  numberOfStaff: number;
};

type section = entity & {
  rollNumber: number;
  classTeacher: string;
  numberOfStudents: number;
  numberOfBoys: number;
  numberOfGirls: number;
};

type subject = entity & {
  grade: grade;
  type: string;
  subjectHours: subjectDuration;
  subjectTeacher: string;
  subjectCoordinator: string;
};

type examination = entity & {
  grade: grade;
  examType: examType;
  term: number;
  duration: number;
  maximumMarks: number;
  minimumMarks: number;
};

type educationResult = entity & {
  subjectName: string;
  maximumMarks: number;
  marksObtained: number;
  percentage: string;
  remark: string;
};

type previousEducation = {
  schoolName: string;
  schoolPlace: string;
  lastAttendedClass: grade;
  modeOfSchool: schoolMode;
  yearOfCompletion: string;
  reasonForTransfer: string;
  results: educationResult[];
};

type hostel = entity & {
  address: string;
};

// school grade entity

type gradeSectionSubject = {
  grade: grade;
  sections: section[];
  subjectDetails: subject[];
  examinationAndMarks: examination[];
};

// school student entities

type studentDetails = person & {
  grade: grade;
  section: section;
  medium: medium;
  rollNumber: number;
  aadharNumber: number;
  isPhysicalyDisabled: boolean;
  physicalDisability: string;
  taluk: string;
  education: previousEducation[];
  accountNumber: number;
  bankName: string;
  ifscCode: string;
  bankNameAndBranch: string;
};

type studentFather = person & {
  occupation: occupation;
  incomePerYear: string;
  highestEducation: educationLevel;
  aadharNumber: number;
};

type studentMother = studentFather;

type studentSibling = person & {
  isBrotherOrSister: "brother" | "sister";
  institueName: string;
  class: grade;
};

type studentGuardian = person & {
  occupation: occupation;
  incomePerYear: string;
  highestEducation: educationLevel;
  relationship: relationship;
};

type student = {
  studentDetails: studentDetails;
  familyDetails: {
    fatherDetails: studentFather;
    motherDetails: studentMother;
    hasSibling: boolean;
    siblingDetails: studentSibling[];
    hasGuardian: boolean;
    guardianDetails: studentGuardian;
  };
};

// school teacher entities

type teacherPersonalDetails = person & {
  jobRole: jobRole;
  designation: deisgnation;
  grade: grade;
  maritalStatus: maritalStatus;
  aadharNumber: number;
  isPhysicalyDisabled: boolean;
  physicalDisability: string;
  languages: languageProficiency[];
  permanentDoorNumber: string;
  permanentCity: string;
  permanentDistrict: string;
  permanentState: state;
  permanentPinCode: number;
  permanentPrimaryMobileNumber: string;
  permanentSecondaryMobileNumber: string;
  permanentEmailID: string;
  permanentIsRuralOrUrban: "rural" | "urban";
  isFamilyPoliticallyExposed: boolean;
  politicalExposureDetails: string;
  hasMedicalProblem: boolean;
  hasCriminalCase: boolean;
};

type teacherFather = person & {
  highestEducation: educationLevel;
  workStatus: workStatus;
};

type teacherMother = teacherFather;

type teacherSpouse = person & {
  highestEducation: educationLevel;
  workStatus: workStatus;
  annualIncome: string;
};

type teacherChildren = person & {
  schoolName: string;
  educationDetails: string;
  email: string;
};

type teacherEmergencyContact = {
  personName: string;
  relationship: string;
  mobileNumber: number;
};

type educationQualification = entity & {
  qualification: educationLevel;
  board: string;
  medium: medium;
  subject: string;
  gradeOrPercentage: string;
  marksheet: file;
};

type experienceDetails = entity & {
  instituteName: string;
  fromDate: Date;
  toDate: Date;
  specialization: string;
  remark: string;
  referenceNameAndNumber: string;
};

type payrollDetails = entity & {
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  micrCode: string;
  uanNumber: string;
  nomineeName: string;
  relationWithNominee: relationship;
  nomineeDateOfBirth: Date;
  nomineeMobileNumber: string;
};

type document = entity & {
  url: string;
};

type researchExperience = {
  topic: string;
  nameOfJournal: string;
  edition: Date;
  isbnNumber: number;
  webLink: string;
};

type teacher = {
  personalDetails: teacherPersonalDetails;
  familyDetails: {
    fatherDetails: teacherFather;
    motherDetails: teacherMother;
    maritalStatus: maritalStatus;
    spouseDetails: teacherSpouse;
    haveChildren: boolean;
    childrenDetails: teacherChildren[];
    emergencyContactDetails: teacherEmergencyContact;
  };
  educationDetails: {
    qualifications: educationQualification[];
    experiences: experienceDetails[];
  };
  payrollDetails: payrollDetails;
  documents: {
    idProofs: document[];
    payslips: document[];
    resume: document;
    certificate: document[];
    researchExperience: researchExperience[];
    others: {
      hostel: {
        optForHostel: boolean;
        hostel: hostel;
      };
    };
  };
};

type department = entity & {
  type: 'academic' | 'functional';
  shortCode?: string;
  degrees: educationLevel;
  tags?: string[];
}

