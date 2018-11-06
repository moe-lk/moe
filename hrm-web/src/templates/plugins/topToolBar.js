/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */

// @flow
import Drawer from '@material-ui/core/Drawer'
import React from 'react'
import { ThemeProvider } from 'ory-editor-ui'
import { Grid } from '@material-ui/core';

const darkBlack = 'rgba(0, 0, 0, 0.87)'

const TopToolbar = ({
  open = false,
  children,
  className,
  theme
}: {
    open?: boolean,
    children?: Object,
    className?: string,
    theme?: string
  }) => (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="space-between">
        <Drawer
          variant="persistent"
          className={className}
          open={open}
          anchor="right"
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              border: 'none',
              right: '120px'
            }
          }}
        >
          <div
            style={{
              border: `${darkBlack} 1px solid`,
              borderRadius: '4px 4px 0 0',
              backgroundColor: darkBlack,
              padding: '12px 12px',
              left: '120',
              maxWidth: '255px',
              margin: 'auto'
            }}
          >
            {children}
          </div>
        </Drawer>
      </Grid>
    </ThemeProvider>
  )

export default TopToolbar
