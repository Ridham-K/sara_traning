import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useForm, Controller } from "react-hook-form";

import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function App() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      age: "",
      dob: null,
      gender: "",
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const onSubmit = (data) => {
  const formattedData = {
    ...data,
    dob: data.dob ? data.dob.format("DD-MM-YYYY") : "",
  };

  setLoading(true);

  setTimeout(() => {
    setProfileData(formattedData);
    setLoading(false);
    reset({
      name: "",
      age: "",
      dob: null,
      gender: "",
      email: "",
    });
  }, 2000);
};

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          marginTop: 5,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Profile Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          {/* Age */}
          <TextField
            label="Age"
            type="number"
            fullWidth
            margin="normal"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 1,
                message: "Age must be greater than 0",
              },
            })}
            error={!!errors.age}
            helperText={errors.age?.message}
          />

          {/* DOB */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dob"
              control={control}
              rules={{
                required: "Date of Birth is required",
              }}
              render={({ field }) => (
                <DatePicker
                  label="Date of Birth"
                  value={field.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      margin: "normal",
                      error: !!errors.dob,
                      helperText: errors.dob?.message,
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          {/* Gender */}
          <FormControl
            fullWidth
            margin="normal"
            error={!!errors.gender}
          >
            <InputLabel>Gender</InputLabel>

            <Select
              label="Gender"
              defaultValue=""
              {...register("gender", {
                required: "Please select a gender",
              })}
            >
              <MenuItem value="">
                <em>Select Gender</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>

            {errors.gender && (
              <Typography
                variant="caption"
                color="error"
                sx={{ ml: 2, mt: 0.5 }}
              >
                {errors.gender.message}
              </Typography>
            )}
          </FormControl>

          {/* Email */}
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          {/* Submit Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
          </Box>
        </form>

        {/* Loader */}
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {/* Submitted Data */}
        {profileData && !loading && (
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mt: 4,
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
            >
              Submitted Data
            </Typography>

            <Typography>
              <strong>Name:</strong> {profileData.name}
            </Typography>

            <Typography>
              <strong>Age:</strong> {profileData.age}
            </Typography>

            <Typography>
              <strong>DOB:</strong> {profileData.dob}
            </Typography>

            <Typography>
              <strong>Gender:</strong> {profileData.gender}
            </Typography>

            <Typography>
              <strong>Email:</strong> {profileData.email}
            </Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}

export default App;