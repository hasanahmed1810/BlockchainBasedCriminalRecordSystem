import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function Album() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-28 border border-gray">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs  uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Civilian ID
            </th>
            <th scope="col" class="px-6 py-3">
              age
            </th>
            <th scope="col" class="px-6 py-3">
              height
            </th>
            <th scope="col" class="px-6 py-3">
              date of birth
            </th>
            <th scope="col" class="px-6 py-3">
              native language
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b ">
            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              Example 1
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">31</td>
            <td class="px-6 py-4">150</td>
            <td class="px-6 py-4">01/01/1991</td>
            <td class="px-6 py-4">english</td>
          </tr>
          <tr class="border-b bg-gray-50">
            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              Exmaple 2
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">32</td>
            <td class="px-6 py-4">160</td>
            <td class="px-6 py-4">01/01/1992</td>
            <td class="px-6 py-4">english</td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              Example 3
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">33</td>
            <td class="px-6 py-4">170</td>
            <td class="px-6 py-4">01/01/1993</td>
            <td class="px-6 py-4">urdu</td>
          </tr>
          <tr class="border-b bg-gray-50 ">
            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
              Example 4
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">34</td>
            <td class="px-6 py-4">180</td>
            <td class="px-6 py-4">01/01/1994</td>
            <td class="px-6 py-4">urdu</td>
          </tr>
          <tr>
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
              Example 5
            </th>
            <td class="px-6 py-4">111111</td>
            <td class="px-6 py-4">35</td>
            <td class="px-6 py-4">190</td>
            <td class="px-6 py-4">01/01/1995</td>
            <td class="px-6 py-4">urdu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
