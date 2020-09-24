import { gql } from "@apollo/client";

export const DELETE_ROSTER_MUTATION = gql`
  mutation deleteRoster($_id: String) {
    deleteRoster(id: $_id) {
      _id
    }
  }
`;

export const GET_ROSTER_QUERY = gql`
  query getRoster($id: String) {
    roster(id: $id) {
      date
      venue
      employeeType
    }
  }
`;

export const UPSERT_ROSTER_MUTATION = gql`
  mutation upsertRoster(
    $_id: String
    $date: String
    $venue: String
    $employeeType: String
  ) {
    upsertRoster(
      _id: $_id
      date: $date
      venue: $venue
      employeeType: $employeeType

    ) {
      date
      venue
      employeeType
    }
  }
`;
