import { gql } from "@apollo/client";

export const DELETE_SHIFT_MUTATION = gql`
  mutation deleteShift($_id: String) {
    deleteShift(id: $_id) {
      _id
    }
  }
`;

export const GET_SHIFT_QUERY = gql`
  query getShift($id: String) {
    shift(id: $id) {
      date
      clockOnDate
      clockOffDate
      employee
      roster
      shiftConfirmed
    }
  }
`;

export const UPSERT_SHIFT_MUTATION = gql`
  mutation upsertShift(
    $_id: String
    $date: String
    $clockOnDate: String
    $clockOffDate: String
    $employee: String
    $roster: String
    $shiftConfirmed: Boolean
  ) {
    upsertShift(
      _id: $_id
      date: $date
      clockOnDate: $clockOnDate
      clockOffDate: $clockOffDate
      employee: $employee
      roster: $roster
      shiftConfirmed: $shiftConfirmed
    ) {
      date
      clockOnDate
      clockOffDate
      employee
      roster
      shiftConfirmed
    }
  }
`;
