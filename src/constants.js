export const GRAPHQL_API = "http://localhost:1337/graphql";

export const GET_EMPLOYEES_QUERY = `
query {
  employees {
    employeeType
    profilePic
    name
    dob
    address
    phone
    email
    passwordDigest
    emergencyContactName
    emergencyContactPhone
    securityLicNo
    securityLicStatus
    rsaNo
    rsaLicStatus
    firstAidExp
  }
}`;

export const GET_SHIFTS_QUERY = `
query {
  shifts {
    date: String,
    clockOnDate: String,
    clockOffDate: String,
    employeeId: String,
    employee: Employee,
    roster: Roster,
    shiftConfirmed: Boolean
  }
}`;

export const GET_VENUES_QUERY = `
query {
  venues {
    logo: String,
    name: String,
    address: String,
    phone: String,
    email: String,
    licenseeName: String,
    liquorLicNo: String,
    liquorLicStatus: Boolean,
    masterLicNo: String,
    masterLicExp: String,
    masterLicStatus: Boolean,
    membershipDate: String
  }
}`;

export const GET_ROSTERS_QUERY = `
query {
  rosters {
    date: String,
    venue: Venue,
    shifts: [Shift],
    employeeType: String
  }
}`;
